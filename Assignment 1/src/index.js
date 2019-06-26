/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic
Policy.
* No part of this assignment has been copied manually or electronically from any
other source
* (including web sites) or distributed to other students.
*
* Name: Cindy Le            Student ID: xxxxxxxxx            Date: May 17, 2019
*
*
********************************************************************************/

$(document).ready(function() {
    console.log('jQuery working');

    $('#teams-menu').on('click', function() {
        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3>Teams</h3>');

        $.ajax({
            url: 'https://sleepy-inlet-67076.herokuapp.com/teams',
            type: 'GET',
            dataType: 'JSON',
            success: result => {
                let data = JSON.stringify(result);
                $('#data').append(data);
            }
        });
    });

    $('#employees-menu').on('click', function() {
        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3>Employees</h3>');

        $.ajax({
            url: 'https://sleepy-inlet-67076.herokuapp.com/employees',
            type: 'GET',
            dataType: 'JSON',
            success: result => {
                let data = JSON.stringify(result);
                $('#data').append(data);
            }
        });
    });

    $('#projects-menu').on('click', function() {
        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3>Projects</h3>');

        $.ajax({
            url: 'https://sleepy-inlet-67076.herokuapp.com/projects',
            type: 'GET',
            dataType: 'JSON',
            success: result => {
                let data = JSON.stringify(result);
                $('#data').append(data);
            }
        });
    });

    $('#positions-menu').on('click', function() {
        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3>Positions</h3>');

        $.ajax({
            url: 'https://sleepy-inlet-67076.herokuapp.com/positions',
            type: 'GET',
            dataType: 'JSON',
            success: result => {
                let data = JSON.stringify(result);
                $('#data').append(data);
            }
        });
    });
});
