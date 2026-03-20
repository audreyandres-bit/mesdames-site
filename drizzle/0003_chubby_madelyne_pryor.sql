CREATE TABLE `giftCards` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(32) NOT NULL,
	`amount` int NOT NULL,
	`buyerId` int NOT NULL,
	`buyerEmail` varchar(320) NOT NULL,
	`recipientEmail` varchar(320) NOT NULL,
	`recipientName` text,
	`message` text,
	`stripePaymentIntentId` varchar(255),
	`status` enum('pending','paid','sent','redeemed','cancelled') NOT NULL DEFAULT 'pending',
	`redeemedAt` timestamp,
	`sentAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `giftCards_id` PRIMARY KEY(`id`),
	CONSTRAINT `giftCards_code_unique` UNIQUE(`code`)
);
