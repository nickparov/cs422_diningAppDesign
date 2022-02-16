// UI navbar responsiveness

if(window.innerWidth < 990) {
    $(".navbar-nav").addClass("text-center");
    $(".nav-link").addClass("nav-link-collapsed")
}

const dineData = [
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2018/06/DIN_Banner_SCE-600x365.jpg',
      title: 'Student Center East',
      location: '750 S. Halsted St.',
      link: 'https://dining.uic.edu/locations/sce/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/scw2-600x365.jpg',
      title: 'Student Center West',
      location: '828 S. Wolcott Ave.',
      link: 'https://dining.uic.edu/locations/scw/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2018/06/DIN_Box_JST-600x397.png',
      title: 'James Stukel Towers',
      location: '718 W. Rochford St.',
      link: 'https://dining.uic.edu/locations/jst/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2018/06/DIN_FTile_BSB.png',
      title: 'Behavioral Sciences Building',
      location: '1007 W. Harrison St.',
      link: 'https://dining.uic.edu/locations/bsb/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/clinicalnorth-600x397.jpg',
      title: 'Clinical Sciences North',
      location: '820 S. Wood St.',
      link: 'https://dining.uic.edu/locations/csn/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/daleylibrary-600x397.jpg',
      title: 'UIC Daley Library',
      location: '801 S. Morgan St.',
      link: 'https://dining.uic.edu/locations/library/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2020/03/20190718-ARC-OpenHouse-01-1090x541-600x397.jpg',
      title: 'Academic & Residential Complex',
      location: '940 W. Harrison St.',
      link: 'https://dining.uic.edu/locations/arc/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/healthlibrary-600x397.jpg',
      title: 'Library of Health Sciences',
      location: '1750 W. Polk St.',
      link: 'https://dining.uic.edu/locations/lhs/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/outpatientcare-600x397.jpg',
      title: 'Outpatient Care Clinic',
      location: '1801 W. Taylor St.',
      link: 'https://dining.uic.edu/locations/outpatient-care-clinic-hours/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/Webp.net-resizeimage-600x365.jpg',
      title: 'On the Mall',
      location: '1717 W. Polk St.',
      link: 'https://dining.uic.edu/locations/otm/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/SPH-600x397.jpg',
      title: 'School of Public Health and Psychiatric Institute',
      location: '1603 W. Taylor St.',
      link: 'https://dining.uic.edu/locations/sphpi/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/uicrec-600x397.jpg',
      title: 'Student Recreation Facility',
      location: '737 S. Halsted St.',
      link: 'https://dining.uic.edu/locations/rec/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/Webp.net-resizeimage-1-600x397.jpg',
      title: 'Student Services Building',
      location: '1200 W. Harrison St.',
      link: 'https://dining.uic.edu/locations/ssb/'
    },
    {
      url: 'https://dining.uic.edu/wp-content/uploads/sites/81/2017/12/Webp.net-resizeimage-2-600x397.jpg',
      title: 'University Hall',
      location: '601 S. Morgan St.',
      link: 'https://dining.uic.edu/locations/uh/'
    }
  ];


  dineData.forEach(({url, title, location, link}) => {
    $('.locations-container').prepend(`
        <div class="col-lg-6 mt-4 p-4">
            <div class="card" style="background-color: rgba(0, 0, 0, 0.3); color:white">
                <img src="${url}" class="card-img-top" alt="just a regular image">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${location}</p>
                    <a href="${link}" class="btn btn-outline-light btn-block">VISIT</a>
                </div>
            </div>
        </div>`)
  })

