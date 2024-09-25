$(document).ready(function() {
    // Append value to the result input
    $('.btn-number, .btn-operator').on('click', function() {
        const value = $(this).text();
        $('#result').val(function(i, oldValue) {
            return oldValue + value;
        });
    });

    // Clear the result
    $('.btn-clear').on('click', function() {
        $('#result').val('');
    });

    // Calculate the result
    $('.btn-equal').on('click', function() {
        const input = $('#result').val();
        try {
            const output = eval(input);
            $('#result').val(output);
        } catch (error) {
            $('#result').val('Error');
        }
    });
});
