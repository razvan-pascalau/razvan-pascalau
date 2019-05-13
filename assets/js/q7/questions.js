var questions = [
//1-5
    new Question("Compared to the level of real GDP per person in 1870, by 2010, real GDP in the U.S was ________ times larger, while real GDP per person in Japan was ________.", [
    	"12; 12 times larger",
    	"30; 12 times larger",
    	"12; 30 times larger",
    	"12; smaller"], 2),
    new Question("Growth in real GDP per capita has:", [
    	"been more rapid since the mid-nineteenth century than ever before.",
    	"been steady over the course of human history.",
    	"increased over the last 150 years only in the United States and Canada.",
    	"slowed since the mid-nineteenth century compared to before."], 0),
    new Question("The rise in average living standards experienced by most industrialized countries:", [
    	"has resulted primarily from an increase in population worldwide.",
    	"was more rapid before 1870 than after 1870.",
    	"has been more rapid since 1950 than before 1950.",
    	"has been continuous over the course of human history."], 2),
    new Question("The payment of interest not only on the original deposit, but on all previously accumulated interest is called:", [
    	"the real interest rate.",
    	"compound interest.",
    	"the nominal interest rate.",
    	"simple interest."], 1),
    new Question("Compound interest is:", [
    	"the payment of interest on both the original deposit and all accumulated interest.",
    	"the real rate of interest compounded by the rate of inflation.",
    	"the payment of interest on the original deposit.",
    	"the interest rate adjusted for the rate of inflation."], 0),

//6-10
	new Question("If you left $2,500 on deposit with a bank promising to pay you a 5 percent compound annual rate of interest, then after 50 years your deposit would be worth approximately:", [
    	"$28,668",
    	"$2,625",
    	"$11,467",
    	"$328,750"], 0),
    new Question("Suppose when you are 21 years old, you deposit $1,000 into a bank account that pays 6 percent annual compound interest, and you do not withdraw from the account until your retirement at the age of 65, 44 years later. How much will be in the account when you retire?", [
    	"$12,985",
    	"$3,752",
    	"$24,871",
    	"$46,794"], 0),
    new Question("Suppose when you are 21 years old, you deposit $1,000 into a bank account that pays annual compound interest, and you do not withdraw from the account until your retirement at the age of 65, 44 years later. How much more will be in your account if the interest rate is 6 percent rather than 5 percent?", [
    	"$4,428",
    	"$8,557",
    	"$440",
    	"$1,549"], 0),
    new Question("Suppose when you are 21 years old, you deposit $1,000 into a bank account that pays annual compound interest, and you do not withdraw from the account until your retirement at the age of 65, 44 years later. How much more will be in your account if the interest rate is 6 percent rather than 4 percent?", [
    	"$7,369",
    	"$880",
    	"$5,617",
    	"$2,390"], 0),
    new Question("Real GDP per person in Richland is $20,000, while real GDP per person in Poorland is $10,000. However, Richland's real GDP per person is growing at 1 percent per year, and Poorland's real GDP per person is growing at 2 percent per year. After 50 years, real GDP per person in Richland minus real GDP in Poorland is:", [
    	"positive and greater than $10,000.",
    	"negative.",
    	"zero.",
    	"positive but less than $10,000."], 3),

//11-15
	new Question("Real GDP per person in Northland is $30,000, while real GDP in Southland is $10,000, However, Northland's real GDP per person is growing at 1 percent per year, and Southland's real GDP per person is growing at 3 percent per year. If these growth rates persist indefinitely, then:", [
    	"Northland's real GDP per person will always be between 1 and 2 percent greater than Southland's.",
    	"Southland's real GDP per person will always be exactly 2 percent less than Northland's.",
    	"Southland's real GDP per person will eventually be greater than Northland's.",
    	"Northland's real GDP per person will decline until it equals Southland's."], 2),
    new Question("Real GDP per person in Westland is $30,000, while real GDP in Eastland is $10,000, Westland's real GDP per person is growing at 3 percent per year and Eastland's real GDP per person is growing at 3 percent per year. If these growth rates persist indefinitely, then:", [
    	"Westland's real GDP per person will always be at least $20,000 greater than Eastland's.",
    	"Eastland's real GDP per person will rise until it equals Westland's real GDP per person.",
    	"Eastland's real GDP per person will always be exactly $20,000 less than Westland's.",
    	"Eastland's real GDP per person will eventually be greater than Westland's."], 0),
    new Question("Real GDP per person in the United States was $9,864 in 1950. Over the next 48 years, it grew at a compound annual rate of 2.0 percent. If, instead, real GDP per person had grown at an average compound annual rate 2.5 percent, then real GDP per capita in the United States in 1998 would have been approximately ________ larger.", [
    	"$25,520",
    	"$6,751",
    	"$2,370",
    	"$12,530"], 1),
    new Question("Real GDP per person can increase:", [
    	"only if the share of the population employed decreases.",
    	"if the share of population employed and/or average labor productivity increases.",
    	"only if the share of the population employed increases.",
    	"only if average labor productivity increases."], 1),
    new Question("A nation's standard of living, as measured by real GDP per person, increases:", [
    	"only if the share of population employed increases.",
    	"only if average labor productivity increases.",
    	"if either average labor productivity and/or the share of population employed increase.",
    	"only if both average labor productivity and the share of population employed increase."], 2),

//16-20
	new Question("If the share of population employed in two countries is the same, average living standards will be higher in the country with:", [
    	"higher average labor productivity.",
    	"lower average labor productivity.",
    	"the larger population.",
    	"the smaller population."], 0),
    new Question("If average labor productivity in two countries is the same, average living standards will be lower in the country with:", [
    	"the larger population.",
    	"the lower share of population employed.",
    	"the smaller population.",
    	"the higher share of population employed."], 1),
    new Question("If real GDP per person in a country equals $40,000 and 60 percent of the population is employed, then average labor productivity equals:", [
    	"$40,000.",
    	"$24,000.",
    	"$60,000.",
    	"$66,667."], 3),
    new Question("If real GDP per person in a country equals $20,000 and 40 percent of the population is employed, then average labor productivity equals:", [
    	"$20,000.",
    	"$40,000.",
    	"$50,000.",
    	"8,000."], 2),
    new Question("The population of Alpha totals one million people, 40 percent of whom are employed. Average output per worker in Alpha is $20,000. Real GDP per person in Alpha totals:", [
    	"$8,000.",
    	"$20,000.",
    	"12,000.",
    	"$50,000."], 0),

//21-25
	new Question("The population of Omega totals one million people, 30 percent of whom are employed. Average output per worker in Alpha is $30,000. Real GDP per person in Alpha totals:", [
    	"$21,000.",
    	"$30,000.",
    	"$9,000.",
    	"$100,000."], 2),
    new Question("In Econland, 500,000 of the 2 million people in the country are employed. Average labor productivity in Econland is $15,000 per worker. Real GDP per person in Econland totals:", [
    	"$11,250.",
    	"$60,000.",
    	"$3,750.",
    	"$1,250."], 2),
    new Question("Fred and Barney fill egg cartons with eggs. Fred just started the job and can fill only 20 cartons an hour. Barney has significant on-the-job experience and can fill 40 cartons an hour. Both Fred and Barney work 40 hours a week. Fred's average weekly productivity is ________ cartons; Barney's average weekly productivity is ________ cartons; and as a team their average weekly productivity is ________ cartons.", [
    	"20; 40; 30",
    	"800; 2,000; 1,600",
    	"20; 40; 60",
    	"800; 1,600; 1,200"], 3),
    new Question("Human capital is:", [
    	"the financial resources available to humans for investment.",
    	"the factories and machinery made by workers.",
    	"the factories and machinery used by humans in the production process.",
    	"the talents, training, and education of workers."], 3),
    new Question("Economists refer to the talents, training, and education of workers as:", [
    	"physical capital.",
    	"labor supply.",
    	"average labor productivity.",
    	"human capital."], 3),

//26-30
	new Question("Workers should invest in additional human capital as long as the:", [
    	"opportunity cost is zero.",
    	"marginal benefit exceeds the marginal cost.",
    	"marginal cost exceeds the marginal benefit.",
    	"opportunity cost exceeds the marginal benefit."], 1),
    new Question("When a worker learns how to use a new business-related software program, this is an example of investing in:", [
    	"research and development",
    	"physical capital.",
    	"the stock market.",
    	"human capital."], 3),
    new Question("Providing workers with on-the-job training will increase:", [
    	"average labor productivity.",
    	"the unemployment rate.",
    	"the labor force participation rate.",
    	"the share of the population employed."], 0),
    new Question("When a firm builds a new factory, this is an example of an investment in:", [
    	"physical capital.",
    	"research and development.",
    	"human capital.",
    	"the market."], 0),
    new Question("Which of the following is an example of an investment in physical capital?", [
    	"A chemical firm employs chemists to develop new chemicals.",
    	"A firm trains workers to operate new machinery.",
    	"A firm purchases new equipment for a manufacturing process.",
    	"A firm pays for workers to take college classes."], 2)
    ];
