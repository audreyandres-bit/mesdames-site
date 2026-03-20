CREATE TABLE `gift_cards` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(32) NOT NULL,
	`amount` int NOT NULL,
	`currency` varchar(3) NOT NULL DEFAULT 'EUR',
	`status` enum('active','used','expired') NOT NULL DEFAULT 'active',
	`purchaser_email` varchar(320) NOT NULL,
	`purchaser_name` varchar(255),
	`recipient_email` varchar(320),
	`recipient_name` varchar(255),
	`message` text,
	`stripe_payment_id` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`expires_at` timestamp,
	`used_at` timestamp,
	CONSTRAINT `gift_cards_id` PRIMARY KEY(`id`),
	CONSTRAINT `gift_cards_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`category` varchar(100) NOT NULL,
	`description` text,
	`duration` int,
	`price` int,
	`image` text,
	`order` int DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `services_id` PRIMARY KEY(`id`)
);
