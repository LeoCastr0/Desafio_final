import Sequelize from "sequelize"

const sequelize = new Sequelize(
    "postgres://aknrnzma:4lB7tj9yQs-R9VSlAR9n8iCsHMlGPEz9@batyr.db.elephantsql.com/aknrnzma",
    {
        dialect: "postgres",
        define: {
            timestamps: false,
        },
    }
)

export default sequelize
