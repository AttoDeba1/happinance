#Happinance

# 1. Question 1:
Create with MS Sql Server syntax:

````sql

CREATE TABLE happinance.weather.Temperature
(
    id INT PRIMARY KEY NOT NULL,
    ville VARCHAR(50),
    departement VARCHAR(2),
    temperature DECIMAL(3,1),
    jour DATE
)
````
# 2. Question 2.
Procedure to get an average temperature by city:

`````SQL
CREATE PROCEDURE getAverageTemperatureByCity @city nvarchar(50)
AS 
SELECT AVG(temperature) as avg_temperature FROM Temperature WHERE ville = @city GROUP BY ville
GO
`````
~~Bonus~~

Get average temperature for all cities
`````SQL
CREATE PROCEDURE getAllCitiesAverageTemperature
AS 
SELECT ville, departement, AVG(temperature) as avg_temperature FROM Temperature GROUP BY ville
GO
`````


# 3. Simple Demo Application with NodeJs & Express 

3.1. Install and run locally

##### Requirement:

- node ^12 
- M.Server mssql 

#####  DATASOURCE

Create a local database on a MServer like question 1.

Execute the following procedures ( Question 2): `getAverageTemperatureByCity` `getAllCitiesAverageTemperature`

You have a demo data in /src/database/demo_data.sql

#### Install node parkages, Build and Run

```shell

git clone https://github.com/AttoDeba1/happinance.git;
cd happinance;
#install node package
npm install 
#build and run
npm run start

```

Go to http://localhost:3000  


