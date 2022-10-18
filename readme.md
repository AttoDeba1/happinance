#Happinance

1. Question 1:
Create with MS Sql Server syntax:

````sql

CREATE TABLE happinance.weather.Temperature
(
    id INT PRIMARY KEY NOT NULL,
    ville VARCHAR(50) NOT NULL,
    departement VARCHAR(3) NOT NULL,
    jour DATETIME NOT NULL,
    temperature INT NOT NULL
)
````
2. Question 2.
Procedure to get an average temperature by city:

`````SQL
CREATE PROCEDURE getAverageTemperatureByCity @city nvarchar(50)
AS 
SELECT AVG(temperature) as avg_temperature FROM Temperature WHERE ville = @city GROUP BY ville
GO
`````
Bonus
Get average temperature for all cities
`````SQL
CREATE PROCEDURE getAllCitiesAverageTemperature
AS 
SELECT ville, departement, AVG(temperature) as avg_temperature FROM Temperature GROUP BY ville
GO
`````


3. Simple demo Application with NodeJs & Express 


