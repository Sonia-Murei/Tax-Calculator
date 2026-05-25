document.getElementById("tax_form").addEventListener('submit',function(event){
    event.preventDefault()

    let basic_salary = Number(document.getElementById("basic_salary").value)
    let benefits = Number(document.getElementById("benefits").value)


    // Write a program that takes input of someone's basic salary and benefits, 
    // adds them to find the gross salary then uses  the gross salary to find the NHIF. 
    // To find the Kenya NHIF Rate using THIS LINK:  
    // Input


    // 1. Gross Salary
    function calcGross(basic, benefits) {
        return basic + benefits
    }

    // Calling

    let grossSalary = calcGross(basic_salary, benefits)
    document.getElementById('gross').innerHTML = grossSalary.toFixed(2)


    // 2. NHIF

    function calcNHIF(grossSalary) {
        let contribution

        if (grossSalary <= 5999) {
            contribution = 150
        } else if (grossSalary <= 7999) {
            contribution = 300
        } else if (grossSalary <= 11999) {
            contribution = 400
        } else if (grossSalary <= 14999) {
            contribution = 500
        } else if (grossSalary <= 19999) {
            contribution = 600
        } else if (grossSalary <= 24999) {
            contribution = 750
        } else if (grossSalary <= 29999) {
            contribution = 850
        } else if (grossSalary <= 34999) {
            contribution = 900
        } else if (grossSalary <= 39999) {
            contribution = 950
        } else if (grossSalary <= 44999) {
            contribution = 1000
        } else if (grossSalary <= 49999) {
            contribution = 1100
        } else if (grossSalary <= 59999) {
            contribution = 1200
        } else if (grossSalary <= 69999) {
            contribution = 1300
        } else if (grossSalary <= 79999) {
            contribution = 1400
        } else if (grossSalary <= 89999) {
            contribution = 1500
        } else if (grossSalary <= 99999) {
            contribution = 1600
        } else {
            contribution = 1700
        }

        return contribution
    }

    // Calling

    let nhif = calcNHIF(grossSalary)
    document.getElementById('nhif').innerHTML = nhif.toFixed(2)

    // 3. NSSF
    // Continue with the program above, then use  the gross salary to find the NSSF. 
    // To find the Kenya NSSF Rate  using 6% of the Gross Salary. 
    // BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 

    function calcNSSF(grossSalary) {
        let nssfBase

        if (grossSalary > 18000) {
            nssfBase = 18000;
        } else {
            nssfBase = grossSalary
        }

        return nssfBase * 0.06
    }

    // Calling

    let nssf = calcNSSF(grossSalary)
    document.getElementById('nssf').innerHTML = nssf.toFixed(2)

    // 4. NHDF
    // Continue with the same program and calculate an individual’s NHDF using:
    //  i.e NHDF = gross_salary *  0.015

    function calcNHDF(grossSalary) {
        return grossSalary * 0.015
    }

    // Calling

    let nhdf = calcNHDF(grossSalary)
    document.getElementById('nhdf').innerHTML = nhdf.toFixed(2)

    // 5. Taxable Income
    // Calculate the taxable income.
    // i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 

    function calcTaxableIncome(grossSalary, nhif, nssf, nhdf) {
        return grossSalary - (nhif + nssf + nhdf)
    }

    // Calling

    let taxableIncome = calcTaxableIncome(grossSalary, nhif, nssf, nhdf)
    document.getElementById('taxable_income').innerHTML = taxableIncome.toFixed(2)

    // 6. PAYEE
    // Continue with the same program and find the person's PAYEE using the taxable income above.
    // Find the Kenya PAYEE Tax Rate using THIS LINK

    function calcPAYEE(taxableIncome) {
        let tax;

        if (taxableIncome <= 24000) {
            tax = taxableIncome * 0.1
        } else if (taxableIncome <= 32333) {
            tax = (24000 * 0.1) + 
                ((taxableIncome - 24000) * 0.25)
        } else if (taxableIncome <= 500000) {
            tax = (24000 * 0.1) +
                (8333 * 0.25) +
                ((taxableIncome - 32333) * 0.3)
        } else if (taxableIncome <= 800000) {
            tax = (24000 * 0.1) +
                (8333 * 0.25) +
                (467667 * 0.3) +
                ((taxableIncome - 500000) * 0.325)
        } else {
            tax = (24000 * 0.1) +
                (8333 * 0.25) +
                (467667 * 0.3) +
                (300000 * 0.325) +
                ((taxableIncome - 800000) * 0.35)
        }

        let relief = 2400
        let finalTax = tax - relief

        return Math.max(finalTax, 0);
    }

    // If finalTax is positive, it returns finalTax.
    // If finalTax is negative, it returns 0.
    // Hence does not allow payee to go below zero.


    // Calling

    let payee = calcPAYEE(taxableIncome);
    document.getElementById('payee').innerHTML = payee.toFixed(2)

    // 7. Net Salary
    // Continue with the same program and calculate an individual’s Net Salary using:
    //  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

    function calcNetSalary(grossSalary, nhif, nssf, nhdf, payee) {
        return grossSalary - (nhif + nssf + nhdf + payee);
    }

    // Calling

    let netSalary = calcNetSalary(grossSalary, nhif, nssf, nhdf, payee);
    document.getElementById('net_salary').innerHTML = netSalary.toFixed(2)
    })

