const sql = require("mssql");
export const database = async  () => {
    try {
        await sql.connect('Server=localhost,1433;Database=happinance;User Id=sa;Password=bigStrongPwd.123;Encrypt=false')
        return sql;
    } catch (err) {
        console.log(err)
    }
}

