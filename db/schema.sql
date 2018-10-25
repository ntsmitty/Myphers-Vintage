CREATE TABLE "Customer" (
	"customerid" integer NOT NULL,
	"firstname" VARCHAR(255) NOT NULL,
	"lastname" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"lastname" VARCHAR(255) NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Product" (
	"productid " integer NOT NULL,
	"productName" VARCHAR(255) NOT NULL,
	"productprice" integer NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	-- //will be stored on S3 
	"productImage" VARCHAR(255) NOT NULL,
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Order" (
	"orderid" integer NOT NULL,
	"customerid" BINARY NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Order History" (
	"historyid" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"dateSold" DATETIME NOT NULL,
	"description" VARCHAR(255) NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Product List" ( 
	"productlistId" integer NOT NULL, 
	"inventoryid" integer NOT NULL, 
)






