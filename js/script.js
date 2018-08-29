var user= {
        name: 'Kevin Gonzalez',
        companyName: 'TechLaunch.io',
        address: '8400 NW 36th St #450, Doral, Fl 33166',
        email: 'kgonzalez@techlaunch.io',
        picture: 'techlaunch-mid.png'
    }
var invoices = [
    {
        inv_id: "0156321",
        companyName: user.companyName,
        date: "9/7/2017",
        order: "Dell Computers",
        amount: 3,
        cost: 3457.67,
        paid:3457.67
    },
    {
        inv_id: "0145632",
        companyName: user.companyName,
        date: "1/5/2017",
        order: "HP Printers",
        amount: 2,
        cost: 248.00,
        paid: 150.00
    },
    {
        inv_id: "0132110",
        companyName: user.companyName,
        date: "6/14/2014",
        order: "Marketing Coffee Mugs",
        amount: 160,
        cost: 414.00,
        paid: 414.00
    },
    // Added Invoices
    {
        inv_id: "0132110",
        companyName: user.companyName,
        date: "9/19/2012",
        order: "BurgerFi Patties",
        amount: 4000,
        cost: 970.00,
        paid: 970.00
    },
    {
        inv_id: "0132110",
        companyName: user.companyName,
        date: "4/7/2015",
        order: "Five Guys Peanuts",
        amount: 82000,
        cost: 50000.00,
        paid: 50000.00
    },
    {
        inv_id: "0143327",
        companyName: user.companyName,
        date: "9/12/2011",
        order: "Marketing Plastic Cups",
        amount: 143000,
        cost: 97000.00,
        paid: 97000.00
    }
]
    document.querySelector('.name').textContent = user.name;
    document.querySelector('.company_name').textContent = user.companyName;
    document.querySelector('.address').textContent = user.address;
    document.querySelector('.email').textContent = user.email;
    //adding invoices
    for(var i=0; i<invoices.length; i++){
        document.querySelector('.invoiceContainer').innerHTML += `
        <div class="invoice" id=${invoices[i].inv_id}> 
        Invoice #:      <br/>
        <p>${invoices[i].inv_id} </p>
        Company Name:      <br/>
        <p>${invoices[i].companyName} </p>
        date:      <br/>
        <p>${invoices[i].date} </p>
        Order:     <br/>
        <p>${invoices[i].order} </p>
        Amount:    <br/>
        <p>${invoices[i].amount} </p>
        Cost:      <br/>
        <p>${invoices[i].cost} </p>
        Paid:      <br/>
        <p>${invoices[i].paid} </p>
        Owed:      <br/>
        <p>${invoices[i].cost - invoices[i].paid} </p>
        </div>
        `
    }