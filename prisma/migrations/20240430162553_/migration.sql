-- AlterTable
ALTER TABLE "CandidateAssessment" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '30 minutes';
