import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { subject, branch, levels, heading, subHeading } from './schema';
import { config } from 'dotenv';

config({ path: '.env' });


const sql = neon("postgresql://newDb_owner:DBq8tGQMSyo6@ep-soft-fog-a15rj9vb.ap-southeast-1.aws.neon.tech/newDb?sslmode=require");
const db = drizzle(sql);

async function seed() {
  await db.insert(subject).values([
    { title: 'Mathematics', route: 'math', imageUrl: 'https://example.com/math.jpg' },
    { title: 'Science', route: 'science', imageUrl: 'https://example.com/science.jpg' },
    { title: 'History', route: 'history', imageUrl: 'https://example.com/history.jpg' },
    { title: 'Literature', route: 'literature', imageUrl: 'https://example.com/literature.jpg' },
    { title: 'Art', route: 'art', imageUrl: 'https://example.com/art.jpg' },
  ]);

  const subjectRows = await db.select().from(subject);
  const subjectIds = subjectRows.map((row) => row.id);

  await db.insert(branch).values([
    { title: 'Algebra', route: 'algebra', imageUrl: 'https://example.com/algebra.jpg', subjectId: subjectIds[0] },
    { title: 'Geometry', route: 'geometry', imageUrl: 'https://example.com/geometry.jpg', subjectId: subjectIds[0] },
    { title: 'Physics', route: 'physics', imageUrl: 'https://example.com/physics.jpg', subjectId: subjectIds[1] },
    { title: 'Chemistry', route: 'chemistry', imageUrl: 'https://example.com/chemistry.jpg', subjectId: subjectIds[1] },
    { title: 'World History', route: 'world', imageUrl: 'https://example.com/world_history.jpg', subjectId: subjectIds[2] },
  ]);

  const branchRows = await db.select().from(branch);
  const branchIds = branchRows.map((row) => row.id);

  await db.insert(levels).values([
    { title: 'Introduction to Algebra', route: '1', branchId: branchIds[0] },
    { title: 'Advanced Algebra', route: '1', branchId: branchIds[0] },
    { title: 'Classical Mechanics', route: '1', branchId: branchIds[2] },
    { title: 'Quantum Mechanics', route: '2', branchId: branchIds[2] },
    { title: 'Organic Chemistry', route: '2', branchId: branchIds[3] },
  ]);

  const levelRows = await db.select().from(levels);
  const levelIds = levelRows.map((row) => row.id);

  await db.insert(heading).values([
    { title: 'Basic Concepts', levelId: levelIds[0] },
    { title: 'Equations and Inequalities', levelId: levelIds[0] },
    { title: 'Kinematics', levelId: levelIds[2] },
    { title: 'Dynamics', levelId: levelIds[2] },
    { title: 'Atomic Structure', levelId: levelIds[4] },
  ]);

  const headingRows = await db.select().from(heading);
  const headingIds = headingRows.map((row) => row.id);

  await db.insert(subHeading).values([
    { title: 'Variables and Constants', headingId: headingIds[0] },
    { title: 'Linear Equations', headingId: headingIds[1] },
    { title: 'Motion in One Dimension', headingId: headingIds[2] },
    { title: 'Newton\'s Laws of Motion', headingId: headingIds[3] },
    { title: 'Electronic Configuration', headingId: headingIds[4] },
  ]);
}

async function main() {
  try {
    await seed();
    console.log('Seeding completed');
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
}

main();
