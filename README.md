# calendar.js

### How to use

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

### Styling the calendar

You can override the default style by adding your own css. The below rule will change the color of the 'Today' button.

````css
<style>
    .calendar .today { background:#00ffff }
</style>
````

Here is the complete list of default rules that you can override as you wish.

````css
.calendar
{
    border: solid 1px #fff;
    box-shadow: 0px 0px 3px 1px #666;
    padding: 1em;
    font-family: arial;
    background: #fff;
    border-radius: 0.3em;
    display: inline-block;
    white-space: nowrap;
    position: absolute;
    z-index: 1
}

.calendar div
{
    text-align: center;
    padding: 0.2em;
    display: inline-block;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none
}

.calendar .day
{
    width: 2.5em;
    cursor: pointer;
    color: #000;
    border: solid 1px #fff;
    border-radius: 0.2em;
    box-sizing: border-box;
    padding: 0.3em
}

.calendar .day:hover
{
    color: #057eff;
    border-color: #057eff
}

.calendar .other
{
    color: #bbb
}

.calendar .btn
{
    cursor: pointer;
    font-size: 1em;
    width: 25%;
    box-sizing: border-box;
    border-radius: 0.2em;
    border: solid 1px #fff
}

.calendar .btn:hover
{
    border-color: #057eff;
    color: #057eff
}

.calendar .year, .calendar .month
{
    width: 50%;
    box-sizing: border-box
}

.calendar .header
{
    cursor: auto;
    color: #057eff;
    margin: 0.8em 0;
    border: #fff
}

.calendar .today-btn
{
    background: #057eff;
    cursor: pointer;
    color: #fff;
    display: block;
    padding: 0.3em;
    border-radius: 0.2em
}

.calendar .today-btn:hover
{
    background: #0069d8
}

.calendar .today
{
    background: #057eff;
    color: #fff !important
}

.calendar .selected
{
    border-color: #f00;
    color: #f00
}

.calendar hr
{
    visibility: hidden;
    margin: 0
}

````
