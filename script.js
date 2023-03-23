// COUNT()
// Using the COUNT() aggregate function, answer the following prompts:

// Find the total number of movies in the film table.
// By an astrological miracle, most of this town's young population has a birthday in the next 3 months. To better prepare for this, we should inventory all movies that are made for children. Find the number of movies that have the G rating in the film table.
// SUM()
// Using the SUM() aggregate function, answer the following prompts:

// What is the SUM value of the rental duration of all movies in the film table?
// A customer wants to watch all of the movies rated R in our catalog. How would we find the SUM of the length of all R-rated movies in the film table so we can make a schedule for them?
// AVG()
// Using the AVG() aggregate function, answer the following prompts:

// Find the AVG value of the length of all movies in the film table.
// An insurance agent is trying to sell us a plan for coverage in the case of damages and accidents to our physical DVDs. He wants to find the AVG value of replacement costs for all G-rated movies since children are a huge contributor to the risk of breakage for those DVDs. How can we find that value?
// MIN()
// Using the MIN() aggregate function, answer the following prompts:

// Find which movie has the least expensive replacement fee in the film table.
// A customer with a short attention span asked us to find the shortest movie in the film table.
// Find what the cheapest rental rate is for an R-rated film in the film table.
// MAX()
// Using the MAX() aggregate function, answer the following prompts:

// Find the longest movie in the film table.
// Find which movie has the most expensive replacement fee in the film table.
// Bonus
// Let's add together our usage of aggregate functions for some more practice:

// Question 1: Find which movie was rented for the longest duration for each rating.

// What movie was rented for the longest duration for each rating?
// Which movie was rented for the longest overall and for how many weeks?
// Question 2: Find how many movies are above the G and PG ratings.

/////////////////SOLUTIONS ///////////////////////////
//

// SELECT * FROM film;

// SELECT COUNT(*) FROM film;

// SELECT COUNT(*) FROM film
// WHERE rating = 'G';

// SELECT SUM(rental_duration) AS TOTAL
// FROM film;

// SELECT SUM(length) AS TOTAL 
// FROM film;


// SELECT AVG(film.length)
// FROM film;

// SELECT AVG(replacement_cost) 
// FROM film
// WHERE rating = 'G';

// SELECT MIN(replacement_cost) FROM film;

// SELECT MIN(length) FROM film;

// SELECT MIN(rental_rate) 
// FROM film
// WHERE rating = 'R';

// SELECT MAX(length) FROM film;

// SELECT MAX(replacement_cost) FROM film;

// SELECT MAX(length) FROM film
// GROUP BY rating ;

// SELECT MAX(rental_duration) AS weeks FROM film;


// SELECT * FROM film;


////////////////////  Made By James Aules //////////
