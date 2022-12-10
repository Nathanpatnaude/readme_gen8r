const LicenseOptions = [{
    name: "none",
    abrv: "none",
    link: "none"
},
{
    name: "Apache License 2.0",
    abrv: "apache-2.0",
    link: "https://choosealicense.com/licenses/apache-2.0/"
},
{
    name: "GNU General Public License v3.0",
    abrv: "lgpl-3.0",
    link: "https://choosealicense.com/licenses/lgpl-3.0/"
},
{
    name: "MIT License",
    abrv: "mit",
    link: "https://choosealicense.com/licenses/mit/"
},
{
    name: "BSD 2-Clause “Simplified” License",
    abrv: "bsd-2-clause",
    link: "https://choosealicense.com/licenses/bsd-2-clause/"
},
{
    name: "BSD 3-Clause New or Revised License",
    abrv: "bsd-3-clause",
    link: "https://choosealicense.com/licenses/bsd-3-clause/"
},
{
    name: "Boost Software License 1.0",
    abrv: "bsl-1.0",
    link: "https://choosealicense.com/licenses/bsl-1.0/"
},
{
    name: "Creative Commons Zero v1.0 Universal",
    abrv: "cc0-1.0",
    link: "https://choosealicense.com/licenses/cc0-1.0/"
},
{
    name: "Eclipse Public License 2.0",
    abrv: "epl-2.0",
    link: "https://choosealicense.com/licenses/epl-2.0/"
},
{
    name: "GNU Affero General Public License 3.0",
    abrv: "agpl-3.0",
    link: "https://choosealicense.com/licenses/agpl-3.0/"
},
{
    name: "GNU General Public License v2.0",
    abrv: "gpl-2.0",
    link: "https://choosealicense.com/licenses/gpl-2.0"
},
{
    name: "GNU Lesser General Public License v2.1” License",
    abrv: "gpl-3.0",
    link: "https://choosealicense.com/licenses/gpl-3.0"
},
{
    name: "Mozilla Public License 2.0",
    abrv: "mpl-2.0",
    link: "https://choosealicense.com/licenses/mpl-2.0"
},
{
    name: "The Unlicense",
    abrv: "unlicense",
    link: "https://choosealicense.com/licenses/unlicense"
},
];

const getLicenseNames = () => {
    return (LicenseOptions.map(a => a.name));
};

function getLicenseAbrv(choice) {
    for (let i = 0; i < LicenseOptions.length; i++) {
        if (choice === LicenseOptions[i].name) {
            return LicenseOptions[i].abrv;
        };
    };
};

function getLicenseLink(choice) {
    for (let i = 0; i < LicenseOptions.length; i++) {
        if (choice === LicenseOptions[i].name) {
            return LicenseOptions[i].link;
        };
    };
};

module.exports = {
LicenseOptions,
getLicenseAbrv,
getLicenseLink,
getLicenseNames,

}