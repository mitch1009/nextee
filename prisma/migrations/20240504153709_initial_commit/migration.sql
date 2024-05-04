/*
  Warnings:

  - The values [CANDIDATE,ClIENT] on the enum `UserRoles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `psycho` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Assessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AssessmentResults` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CandidateAssessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CandidateDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CandidateProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClientProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ErroLogs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InterviewRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobApplications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Leaderboard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OTP` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordStore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ping` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProdCheck` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WishList` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRoles_new" AS ENUM ('USER', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRoles_new" USING ("role"::text::"UserRoles_new");
ALTER TYPE "UserRoles" RENAME TO "UserRoles_old";
ALTER TYPE "UserRoles_new" RENAME TO "UserRoles";
DROP TYPE "UserRoles_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_candidateProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_clientProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_jobPostId_fkey";

-- DropForeignKey
ALTER TABLE "Assessment" DROP CONSTRAINT "Assessment_candidateAssessmentId_fkey";

-- DropForeignKey
ALTER TABLE "Assessment" DROP CONSTRAINT "Assessment_wishListId_fkey";

-- DropForeignKey
ALTER TABLE "AssessmentResults" DROP CONSTRAINT "AssessmentResults_candidateAssessmentId_fkey";

-- DropForeignKey
ALTER TABLE "AssessmentResults" DROP CONSTRAINT "AssessmentResults_userId_fkey";

-- DropForeignKey
ALTER TABLE "CandidateAssessment" DROP CONSTRAINT "CandidateAssessment_candidateProfileId_fkey";

-- DropForeignKey
ALTER TABLE "CandidateDocument" DROP CONSTRAINT "CandidateDocument_candidateProfileId_fkey";

-- DropForeignKey
ALTER TABLE "CandidateProfile" DROP CONSTRAINT "CandidateProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "ClientProfile" DROP CONSTRAINT "ClientProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_assessmentId_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "InterviewRequest" DROP CONSTRAINT "InterviewRequest_candidateProfileId_fkey";

-- DropForeignKey
ALTER TABLE "InterviewRequest" DROP CONSTRAINT "InterviewRequest_clientProfileId_fkey";

-- DropForeignKey
ALTER TABLE "InterviewRequest" DROP CONSTRAINT "InterviewRequest_jobApplicationsId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplications" DROP CONSTRAINT "JobApplications_candidateProfileId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplications" DROP CONSTRAINT "JobApplications_jobPostId_fkey";

-- DropForeignKey
ALTER TABLE "JobPost" DROP CONSTRAINT "JobPost_candidateProfileId_fkey";

-- DropForeignKey
ALTER TABLE "JobPost" DROP CONSTRAINT "JobPost_clientProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Leaderboard" DROP CONSTRAINT "Leaderboard_assessmentId_fkey";

-- DropForeignKey
ALTER TABLE "Leaderboard" DROP CONSTRAINT "Leaderboard_candidateProfileId_fkey";

-- DropForeignKey
ALTER TABLE "OTP" DROP CONSTRAINT "OTP_userId_fkey";

-- DropForeignKey
ALTER TABLE "PasswordStore" DROP CONSTRAINT "PasswordStore_userId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_answerId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_assessmentId_fkey";

-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "psycho",
ALTER COLUMN "role" SET DEFAULT 'USER';

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Answer";

-- DropTable
DROP TABLE "Assessment";

-- DropTable
DROP TABLE "AssessmentResults";

-- DropTable
DROP TABLE "CandidateAssessment";

-- DropTable
DROP TABLE "CandidateDocument";

-- DropTable
DROP TABLE "CandidateProfile";

-- DropTable
DROP TABLE "ClientProfile";

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "Education";

-- DropTable
DROP TABLE "ErroLogs";

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "InterviewRequest";

-- DropTable
DROP TABLE "JobApplications";

-- DropTable
DROP TABLE "JobPost";

-- DropTable
DROP TABLE "Leaderboard";

-- DropTable
DROP TABLE "OTP";

-- DropTable
DROP TABLE "PasswordStore";

-- DropTable
DROP TABLE "Ping";

-- DropTable
DROP TABLE "ProdCheck";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "WishList";

-- DropEnum
DROP TYPE "AccountStatus";

-- DropEnum
DROP TYPE "AssessmentLevel";

-- DropEnum
DROP TYPE "AssessmentStatus";

-- DropEnum
DROP TYPE "AssessmentType";

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "InterviewStatus";

-- DropEnum
DROP TYPE "PsychoState";

-- DropEnum
DROP TYPE "QualificationLevel";

-- DropEnum
DROP TYPE "Roles";

-- DropEnum
DROP TYPE "SeverityEnum";
