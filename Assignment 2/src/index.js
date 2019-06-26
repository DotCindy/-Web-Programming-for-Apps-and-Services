/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Cindy Le      Student ID: xxxxxxxxx          Date: June 2, 2019
 *
 *
 ********************************************************************************/

// Import jQuery, which will also expose $ on the global `window` Object.
import $ from './jquery-es';
// After jQuery is loaded, we can load the Bootstrap JS, which depends on jQuery.
import 'bootstrap';

// Place your imports for Moment.js and Lodash here...
import moment from 'moment';
import _ from 'lodash';

// The rest of your code can go here.  You're also welcome to split
// your code up into multiple files using ES modules and import/export.

let employeesModel = [];

$(document).ready(() => {
  initializeEmployeesModel();

  $('#employee-search').keyup(() => {
    let empSearch = $('#employee-search').val();
    let filtered = getFilteredEmployeesModel(empSearch);
    refreshEmployeeRows(filtered);
  });

  $(document).on('click', 'body-row', function() {
    event.preventDefault();
    let empCopy = getEmployeeModelById($(this).attr('data-id'));

    let mDate = moment(empCopy.HireDate);
    empCopy.HireDate = mDate.format('LL');

    let infoTemplate = _.template(
      `<strong>Address: </strong>
            <%- employee.AddressStreet %>
            <%- employee.AddressState %>
            <%- employee.AddressCity %>
            <%- employee.AddressZip %>
            <br>
            <strong>Phone Number: </strong>
            <%- employee.PhoneNum %>
            ext:
            <%- employee.Extension %>
            <br>
            <strong>Hire Date: </strong>
            <%- hireDate %>`
    );

    let result = infoTemplate({ emp: empCopy });
    showGenericModal(empCopy.FirstName + ' ' + empCopy.LastName, result);
  });

  function initializeEmployeesModel() {
    $.ajax({
      url: 'https://sleepy-inlet-67076.herokuapp.com/employees',
      type: 'GET',
      dataType: 'JSON'
    })
      .done(data => {
        for (let i = 0; i < data.length; i++) {
          employeesModel[i] = data[i];
        }
        refreshEmployeeRows(employeesModel);
      })
      .fail(() => {
        showGenericModal('Error', 'Unable to get Employees');
      });
  }

  function showGenericModal(title, message) {
    $('.modal-title').html(title);
    $('.modal-body').html(message);
    $('#genericModal').modal('show');
  }

  function refreshEmployeeRows(employees) {
    $('#employees-table').empty();
    let loTemplate = _.template(
      `<% _.forEach(employees, function(employee) { %> 
                <div class="row body-row" data-id="<%- employee._id %>" > 
                    <div class="col-md-4 body-column"><%- employee.FirstName %></div> 
                    <div class="col-md-4 body-column"><%- employee.LastName %></div> 
                    <div class="col-md-4 body-column"><%- employee.Position.PositionName %></div> 
                </div><% }); 
            %>`
    );

    let result = loTemplate({ employees: employees });
    $('#employees-table').append(result);
  }

  function getFilteredEmployeesModel(filterString) {
    let input = filterString.toUpperCase();
    let result = _.filter(employeesModel, function(employee) {
      let fName = employee.FirstName.toUpperCase();
      let lName = employee.LastName.toUpperCase();
      let pName = employee.Position.PositionName.toUpperCase();
      return fName.includes(input) || lName.includes(input) || pName.includes(input);
    });
    return result;
  }

  function getEmployeeModelById(id) {
    for (let i = 0; i < employeesModel.length; i++) {
      if (id == employeesModel[i].id) {
        let clone = _.cloneDeep(employeesModel[i]);
        return clone;
      }
    }
    return null;
  }
});
