var questions = [
//1-5
    new Question("When economists use market values to aggregate output, they sum the:", [
    	"price times the quantity of each item produced.",
    	"number of items produced.",
    	"quantity of items produced.",
    	"inputs of each item produced."], 0),
    new Question("If total output is calculated by adding up the market value of goods and services produced, then more expensive items:", [
    	"receive the same weight as cheaper items.",
    	"receive a greater weight than cheaper items.",
    	"are double counted.",
    	"receive a smaller weight than cheaper items."], 1),
    new Question("If an economy produces 3 million oranges that sell for $0.25 each and 100,000 cars that sell for $25,000 each, then when the market value of total output is calculated:", [
    	"oranges receive a smaller weight than cars.",
    	"oranges receive a greater weight than cars.",
    	"oranges receive the same weight as cars.",
    	"the market value of oranges is excluded."], 0),
    new Question("Suppose that the total production of an economy consists of 4 oranges and 10 candy bars, each orange sells for $0.25, and each candy bar sells for $0.50. What is the market value of production in this economy?", [
    	"$5.00",
    	"$0.75",
    	"$1.00",
    	"$6.00"], 3),
    new Question("Suppose that the total production of an economy consists of 10 oranges and 5 candy bars, each orange sells for $0.20, and each candy bar sells for $1.00. Which expression of the output of this economy is most consistent with the concept of GDP?", [
    	"This economy produces two-thirds oranges and one-third candy bars.",
    	"This economy produces $7.00 worth of food.",
    	"This economy produces 15 food items.",
    	"This economy produces food valued at $1.20."], 1),
//6-10
    new Question("A drawback of using market values to aggregate the quantities of goods and services produced in an economy is that:", [
    	"GDP increases when not all goods are produced in greater quantities.",
    	"higher-priced items count more.",
    	"not all economically valuable goods and services are bought and sold in markets.",
    	"market prices generally reflect the economic benefit consumers expect to receive from an item."], 2),
    new Question("The value of unpaid work by a homemaker ________ included in GDP and the value of housekeeping services sold in a market ________ included in GDP.", [
    	"is; is not",
    	"is not; is not",
    	"is; is",
    	"is not; is"], 3),
    new Question("The additional goods and services produced by women in the United States as their labor force participation increases represent:", [
    	"no change in economic activity,",
    	"a decrease in economic activity.",
    	"an increase in economic activity.",
    	"a switch from market to non-market production."], 2),
    new Question("Educational services provided by public schools are:", [
    	"excluded from GDP because they are not sold in markets.",
    	"included in GDP at market prices.",
    	"excluded from GDP because they are intermediate goods.",
    	"included in GDP at cost."], 3),
    new Question("National defense services provided by the military are:", [
    	"excluded from GDP because they are intermediate goods.",
    	"excluded from GDP because they are not sold in markets.",
    	"included in GDP at market prices.",
    	"included in GDP at cost."], 3),

//11-15
    new Question("Final goods and services are ________ production and ________ counted in GDP.", [
    	"the end products of; are",
    	"used up in the process of; are not",
    	"used up in the process of; are",
    	"the end products of; are not"], 0),
    new Question("Intermediate goods and services are ________ production and ________ counted in GDP.", [
    	"the end products of; are",
    	"used up in the process of; are",
    	"used up in the process of; are not",
    	"the end products of; are not"], 2),
    new Question("Which of the following would be classified as a final good?", [
    	"The services provided by lawyers to a computer manufacturer",
    	"New computer software sold to a computer manufacturer for installation in new computers",
    	"Computer chips sold to a computer manufacturer for installation in new computers",
    	"A new computer sold to a business firm"], 3),
    new Question("If Bountiful Orchard grows $100,000 worth of peaches, sells $50,000 worth of peaches to consumers and uses the rest to make jam that is sold to consumers for $100,000, Bountiful Orchard's contribution to GDP is:", [
    	"$100,000.",
    	"$150,000.",
    	"$200,000.",
    	"$50,000."], 1),
    new Question("If the Citrus Growers Association grows $1 million worth of oranges, sells $500,000 worth of oranges to consumers, uses the rest to make orange juice that is sold to consumers for $3 million, Citrus Grower's contribution to GDP is:", [
    	"$1,000,000.",
    	"$4,000,000.",
    	"$3,500,000.",
    	"$500,000."], 2),

//16-20
    new Question("Which of the following is an example of an intermediate good?", [
    	"A new car sold to a family",
    	"A new speaker system sold to an automaker for installation in a car",
    	"A new mobile phone sold to a teenager",
    	"A metal-stamping machine used to produce cars sold to an automaker"], 1),
    new Question("Which of the following is NOT a capital good?", [
    	"A new apartment building purchased by a corporation",
    	"Batteries purchased by a car manufacturer to install in new cars",
    	"A new house purchased by a family",
    	"Machines purchased by a car manufacturer to measure metal thicknesses"], 1),
    new Question("Which of the following is an example of a capital good?", [
    	"A new speaker system sold to an automaker for installation in a car",
    	"A new mobile phone sold to a teenager",
    	"A metal-stamping machine used to produce cars sold to an automaker",
    	"A new car sold to a family"], 2),
    new Question("The sum of the value added by all firms equals total:", [
    	"spending on capital goods.",
    	"profits.",
    	"investment spending.",
    	"value of final goods and services."], 3),
    new Question("GDP equals the value added by producers of:", [
    	"final goods and services only.",
    	"intermediate goods and services, as well as final goods and services.",
    	"intermediate and final goods only.",
    	"intermediate goods and services only."], 1),
//21-25
    new Question("The value of final goods and services equals:", [
    	"the sum of revenues from all sales.",
    	"the sum of the value added by all firms.",
    	"total business spending.",
    	"total business profits."], 1),
    new Question("Summing the value added of all firms yields the value of final goods and services produced because both measures:", [
    	"are adjusted for population growth.",
    	"exclude the value of intermediate goods and services.",
    	"use constant prices.",
    	"exclude the value of capital goods."], 1),
    new Question("Suppose a jar of orange marmalade that is ultimately sold to a customer at The Corner Store is produced by the following production process:<br /><br />Name of Company: &nbsp;&nbsp;&nbsp;&nbsp;  Revenues: &nbsp;&nbsp;&nbsp;&nbsp; Cost of Purchased Inputs: <br /><br /> Citrus Growers Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0 <br /> Florida Jam Company &nbsp;&nbsp;&nbsp; $2.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 <br /> The Corner Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00  <br /><br /> What is the value added of Florida Jam Company? ", [
    	"$1.25",
    	"$2.00 ",
    	"$0.50",
    	"$0.75"], 0),

    new Question("Suppose a jar of orange marmalade that is ultimately sold to a customer at The Corner Store is produced by the following production process:"+`
<br /><br />Name of Company: &nbsp;&nbsp;&nbsp;&nbsp;  Revenues: &nbsp;&nbsp;&nbsp;&nbsp; Cost of Purchased Inputs: <br /><br /> Citrus Growers Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0 <br /> Florida Jam Company &nbsp;&nbsp;&nbsp; $2.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 <br /> The Corner Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00  <br /><br />
    `+"What is the value added of The Corner Store?", [
    	"$2.50",
    	"$1.75",
    	"$2.00",
    	"$0.50"], 3),
    new Question("Suppose a jar of orange marmalade that is ultimately sold to a customer at The Corner Store is produced by the following production process:"+
    	`<br /><br />Name of Company: &nbsp;&nbsp;&nbsp;&nbsp;  Revenues: &nbsp;&nbsp;&nbsp;&nbsp; Cost of Purchased Inputs: <br /><br /> Citrus Growers Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0 <br /> Florida Jam Company &nbsp;&nbsp;&nbsp; $2.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 <br /> The Corner Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00  <br /><br />
    `+"What is the sum of the value added of all the firms?", [
    	"$5.25",
    	"$4.50",
    	"$2.75",
    	"$2.50"], 3),
//  //26-30
    new Question("Suppose a jar of DeLux popcorn that is ultimately sold to a customer at Friendly Groceries is produced by the following production process:"+
    	`
<br /><br />Name of Company: &nbsp;&nbsp;&nbsp;&nbsp;  Revenues: &nbsp;&nbsp;&nbsp;&nbsp; Cost of Purchased Inputs: <br /><br /> Citrus Growers Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0 <br /> Florida Jam Company &nbsp;&nbsp;&nbsp; $2.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 <br /> The Corner Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00  <br /><br />
    `+"What is the value added of Fulton Family Farm?", [
    	"$0.50",
    	"$1.50",
    	"$0.00",
    	"$2.50"], 0),
    new Question("Suppose a jar of DeLux popcorn that is ultimately sold to a customer at Friendly Groceries is produced by the following production process:"+
    	`
<br /><br />Name of Company: &nbsp;&nbsp;&nbsp;&nbsp;  Revenues: &nbsp;&nbsp;&nbsp;&nbsp; Cost of Purchased Inputs: <br /><br /> Citrus Growers Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0 <br /> Florida Jam Company &nbsp;&nbsp;&nbsp; $2.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 <br /> The Corner Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00  <br /><br />
    `+"What is the sum of the value added of all of the firms?", [
    	"$7.00",
    	"$6.50",
    	"$4.00",
    	"$3.00"], 2),
    new Question("When the production process extends over more than one year, the value of the final product is:", [
    	"included in GDP for the year in which production was completed.",
    	"allocated to GDP in each year according to the value added in that year.",
    	"allocated equally to GDP in each year.",
    	"included in GDP for the year in which production began."], 1),
    new Question("Suppose a jar of orange marmalade that is ultimately sold to a customer at The Corner Store is produced by the following production process:"+
    	`
<br /><br />Name of Company: &nbsp;&nbsp;&nbsp;&nbsp;  Revenues: &nbsp;&nbsp;&nbsp;&nbsp; Cost of Purchased Inputs: <br /><br /> Citrus Growers Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0 <br /> Florida Jam Company &nbsp;&nbsp;&nbsp; $2.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 <br /> The Corner Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00  <br /><br />
    `+"If the oranges were grown and the jam produced in the year 2017, but the marmalade was sold at The Corner Store in the year 2018, what is the contribution of these transactions to GDP in the year 2017?", [
    	"$2.75",
    	"$2.00",
    	"$1.25",
    	"2.50"], 1),
    new Question("Suppose a jar of orange marmalade that is ultimately sold to a customer at The Corner Store is produced by the following production process:"+
    	`
 <br /><br />Name of Company: &nbsp;&nbsp;&nbsp;&nbsp;  Revenues: &nbsp;&nbsp;&nbsp;&nbsp; Cost of Purchased Inputs: <br /><br /> Citrus Growers Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0 <br /> Florida Jam Company &nbsp;&nbsp;&nbsp; $2.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.75 <br /> The Corner Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00  <br /><br />
    `+"If the oranges were grown and the jam produced in the year 2017, but the marmalade was sold at The Corner Store in the year 2018, what is the contribution of these transactions to GDP in the year 2018?", [
    	"$0.00",
    	"$2.50",
    	"$0.50",
    	"$2.00"], 2)
    ];
