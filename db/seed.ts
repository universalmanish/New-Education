import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { subject, branch, levels, heading, subHeading } from './schema';
import { config } from 'dotenv';

config({ path: '.env' });


const sql = neon("postgresql://newDb_owner:I6K0afnkLsiG@ep-still-moon-a1ax7k8p.ap-southeast-1.aws.neon.tech/newDb?sslmode=require");
const db = drizzle(sql);

async function seed() {
  await db.insert(subject).values([
    { title: 'Mathematics', route: 'mathematics', imageUrl: 'https://example.com/math.jpg' },
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
    { title: 'Gravity', route: 'gravity', imageUrl: 'https://example.com/physics.jpg', subjectId: subjectIds[1] },
    { title: 'Motion', route: 'motion', imageUrl: 'https://example.com/physics.jpg', subjectId: subjectIds[1] },
    { title: 'Atomic Structure', route: 'atomic-structure', imageUrl: 'https://example.com/chemistry.jpg', subjectId: subjectIds[1] },
    { title: 'World History', route: 'world', imageUrl: 'https://example.com/world_history.jpg', subjectId: subjectIds[2] },
  ]);

  const branchRows = await db.select().from(branch);
  const branchIds = branchRows.map((row) => row.id);

  await db.insert(levels).values([
    { title: '1', route: '1', branchId: branchIds[0] },
    { title: '2', route: '2', branchId: branchIds[0] },
    { title: '3', route: '3', branchId: branchIds[1] },
    { title: '2', route: '2', branchId: branchIds[1] },
    { title: '3', route: '3', branchId: branchIds[2] },
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
