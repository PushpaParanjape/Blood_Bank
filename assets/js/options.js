function openOptions(optionName) {

    switch (optionName) {

        case "donor_reg":
            location.href = "donor-reg.html";
            break;
        case "find_donor":
            location.href = "find-donor.html";
            break;
        case "contactus":
            location.href = "contactus.html";
            break;
        case "home":
            location.href = "index.html";
            break;
        default:
            location.href = "page-not-found.html";
    }
}