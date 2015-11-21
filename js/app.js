//Function for taking inputs and function and printing output
var calculateNums = function() {
    var inputA = parseFloat($("#inputA").val());
    var inputB = parseFloat($("#inputB").val());
    switch ($("select").val()) {
        case '+':
            var result = inputA + inputB;
            $("#result").empty();
            $("#result").append(result);
            break;
        case '-':
            var result = inputA - inputB;
            $("#result").empty();
            $("#result").append(result);
            break;
        case '*':
            var result = inputA * inputB;
            $("#result").empty();
            $("#result").append(result);
            break;
        case '/':
            var result = inputA / inputB;
            $("#result").empty();
            $("#result").append(result);
            break;
        case '%':
            var result = inputA % inputB;
            $("#result").empty();
            $("#result").append(result);
            break;
        case '^':
            var result = Math.pow(inputA, inputB);
            $("#result").empty();
            $("#result").append(result);
            break;
        default:
            break;
    }
}
//Start script when document is ready
$(document).ready(function(){
    //Calculate numbers when the select pulldown changes
    $("form div select").change(function(){
        console.log("select change logged");
        calculateNums();
    });

    //Calculate numbers when text inputs change
    $("input[type='text']").change(function() {
      console.log("input change logged");
      calculateNums();
    });

    //When + button is pressed gather equasion and write it to the list
    $("button[name='list']").click(function() {
        console.log('Add Item Detected');
        var inputA = parseFloat($("#inputA").val());
        var inputB = parseFloat($("#inputB").val());
        var result = parseFloat($("#result").text());
        var operation = $("select").val();
        var listItem = ""
        listItem += '<li>'
        listItem += '<p>' + inputA + " " + operation + " " +  inputB + " = " + result + '</p>';
        listItem += '<input type="text" />'
        listItem += '<button type="button" name="clearItem"><span class="fa fa-times"></span></button>'
        listItem += '<button type="button" name="sortUp"><span class="fa fa-chevron-up"></span></button>'
        listItem += '<button type="button" name="sortDown"><span class="fa fa-chevron-down"></span></button>'
        listItem += '</li>'
        $("#list").prepend(listItem);
    });

    //When X button is pressed in calculator clear all inputs and results
    $("button[name='clear']").click(function() {
        console.log('Clear Calculator Detected');
        var inputA = $("#inputA").val("");
        var inputB = $("#inputB").val("");
        var result = $("#result").text("");
    });

    //When X button is pressed clear the current list item
    $(document).on('click', 'button[name="clearItem"]', function() {
        console.log('Clear Item Detected');
        $(this).parent('li').fadeOut( 300, function(){
           $(this).parent('li').remove(); 
        });
        
    });

    //When ^ button is pressed move the item up the list
    $(document).on('click', 'button[name="sortUp"]', function() {
        console.log('Sort Up Detected');
        var current = $(this).parent('li');
           current.prev().before(current);
    });

    //When v button is pressed move the item down the list
    $(document).on('click', 'button[name="sortDown"]', function() {
        console.log('Sort Down Detected');
        var current = $(this).parent('li');
        current.next().after(current);
    });

});