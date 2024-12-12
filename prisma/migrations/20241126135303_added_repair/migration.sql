/*
  Warnings:

  - You are about to drop the column `created_at` on the `repair` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `repair` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `repair` table. All the data in the column will be lost.
  - Added the required column `description` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_model` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issue_type` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serial_number` to the `Repair` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `repair` DROP COLUMN `created_at`,
    DROP COLUMN `price`,
    DROP COLUMN `product_name`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `device_model` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL DEFAULT 'null',
    ADD COLUMN `issue_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `serial_number` VARCHAR(191) NOT NULL;
