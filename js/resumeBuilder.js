var bio = {
    "name": "Henrique Souza",
    "role": "Mobile App Developer",
    "contacts": {
        "mobile": "+55 51 92902882",
        "email": "souzahs95@gmail.com",
        "github": "henrique-eurekka",
        "twitter": "@_hsouza",
        "location": "Porto Alegre, Brazil"
    },
    "welcomeMessage": "Welcome to my resume page. I hope you like it.",
    "skills": ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "AngularJS", "Ionic Framework"],
    "biopic": "https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/1476628_948162248611994_5618590054637903348_n.jpg?oh=d091f9e8613a00077108e17b38bf5eee&oe=57D0621C",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#topContacts').append(formattedEmail);
        $('#topContacts').append(formattedMobile);
        $('#topContacts').append(formattedGithub);
        $('#topContacts').append(formattedTwitter);
        $('#topContacts').append(formattedLocation);
        $('#footerContacts').append(formattedEmail);
        $('#footerContacts').append(formattedMobile);
        $('#footerContacts').append(formattedGithub);
        $('#footerContacts').append(formattedTwitter);
        $('#footerContacts').append(formattedLocation);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcome);
        $('#header').append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $('#header').append(formattedSkill);
        }
    }
};

var education = {
    "schools": [{
        "name": "Universidade Federal do Rio Grande do Sul",
        "location": "Porto Alegre, Brazil",
        "degree": "Psychology",
        "majors": ["Psychology"],
        "dates": "2013-In Progress",
        "url": "http://www.ufrgs.br/"
    }],
    "onlineCourses": [{
        "title": "Android Development for Beginners",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/android-development-for-beginners--ud837"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);

        for (i = 0; i < education.schools.length; i++) {
            var name = HTMLschoolName.replace("%data%", education.schools[i].name);
            var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var location = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var majors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(name);
            $(".education-entry:last").append(degree);
            $(".education-entry:last").append(dates);
            $(".education-entry:last").append(location);
            $(".education-entry:last").append(majors);
        }

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        for (i = 0; i < education.onlineCourses.length; i++) {
            var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var date = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            var url = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $(".education-entry:last").append(title);
            $(".education-entry:last").append(school);
            $(".education-entry:last").append(date);
            $(".education-entry:last").append(url);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Organiza Junior Enterprise",
        "title": "Website and Social Media Manager",
        "location": "Porto Alegre, Brazil",
        "dates": "2014-In Progress",
        "description": "Posting weekly content on the company's blog, updating the site with new functionality, including mobile responsiveness and a coherent newsletter system."
    }, {
        "employer": "Eurekka Human Acceleration",
        "title": "Co-Founder",
        "location": "Porto Alegre, Brazil",
        "dates": "2016-In Progress",
        "description": "Developing new online products for the company, such as online and classroom courses, e-books, and mobile apps."
    }],
    "display": function() {
        for (i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);

            var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var location = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(employer);
            $(".work-entry:last").append(title);
            $(".work-entry:last").append(dates);
            $(".work-entry:last").append(location);
            $(".work-entry:last").append(description);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Constellation",
        "dates": "2015-In Progress",
        "description": "Multiple sites that allow users to quickly change their mental state (e.g. from anxious to relaxed, from sleepless to sleepy, from angry to calm) through a series of simple exercises.",
        "images": ["http://www.eurekka.me/uploads/6/6/0/1/66014837/4177911.png?414"]
    }],
    "display": function() {
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var image = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);

            $(".project-entry:last").append(title);
            $(".project-entry:last").append(dates);
            $(".project-entry:last").append(description);
            $(".project-entry:last").append(image);
        }
    }
};

bio.display();
projects.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);