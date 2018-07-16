# calendar.js

````html
<!DOCTYPE html>
<html>
    <head>
        <title>My Calendar</title>
        <script src="calendar.min.js"></script>
    </head>
    <body>

        <input id="myTarget" type="text" onclick="showCalendar(this)" />
        <button onclick="showCalendar('#myTarget')">Calendar</button>

        <script>
            function showCalendar(target) {
                calendar.show(target)
            }
        </script>

    </body>
</html>
````
