var header = document.getElementsByTagName('header')[0];
header.classList.add('headerContainer');

var pHeader = document.createElement('p');
pHeader.classList.add('name');
pHeader.textContent = "The Island";
header.appendChild(pHeader);

var sectionHeader = document.createElement('section');
sectionHeader.setAttribute('id', 'quote');
header.appendChild(sectionHeader);

var pSectionHeader = document.createElement('p');
pSectionHeader.classList.add('quote');
pSectionHeader.textContent = "Too bad love isn't like volleyball; you call \"mine\" and everyone backs off.";
sectionHeader.appendChild(pSectionHeader);

var footer = document.getElementsByTagName('footer')[0];
var pFooter = document.createElement('p');
pFooter.classList.add('footer');
footer.appendChild(pFooter);

var spanFooter1 = document.createElement('span');
spanFooter1.classList.add('footer');
spanFooter1.textContent = "Copyright ©2015 The Island • All rights reserved. • 757.343.9145 • 1972 S. Macon Way • Aurora, CO • 80014 • ";
pFooter.appendChild(spanFooter1);

var ip = document.createElement('span');
ip.classList.add('footer');
ip.setAttribute('id', 'ip');
ip.textContent = "IP Address: ";
pFooter.appendChild(ip);

var aEmail = document.createElement('a');
aEmail.classList.add('footerLink');
aEmail.setAttribute('href', 'mailto:kb@twelve24design.com');
aEmail.textContent = " • E-mail Us ";
pFooter.appendChild(aEmail);

var spanFooter2 = document.createElement('span');
spanFooter2.classList.add('footer');
spanFooter2.textContent = " • "
pFooter.appendChild(spanFooter2);

var aTerms = document.createElement('a');
aTerms.classList.add('footerLink');
aTerms.setAttribute('href', 'terms.html');
aTerms.textContent = " Terms of Use";
pFooter.appendChild(aTerms);

$(function() {
    $('#date').datepicker();
});