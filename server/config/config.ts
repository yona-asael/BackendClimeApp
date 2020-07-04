// Config the port of server
process.env.PORT = process.env.PORT || "3000";

//The enviroment

process.env.NODE_ENV = process.env.NODE_ENV || "dev"

// The Url for Database

if (process.env.NODE_ENV === "dev") {
    process.env.URLDB = "mongodb://localhost:27017/clime";
} else {
    process.env.URLDB = "mongodb://localhost:27017/clime";
}