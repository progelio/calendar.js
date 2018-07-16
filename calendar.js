//Author: Rogelio Prestol
//https://github.com/progelio/calendar.js

var calendar = function () {
    var _selected = new Date()
    var _date = new Date()
    var _target, _calendar
    var _days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function $(n) { return document.querySelector(n) }

    function h(tagName, attributes, content, events) {
        var element = document.createElement(tagName)

        if (content || content === 0) {
            element.innerHTML = content
        }

        for (var key in attributes) {
            element.setAttribute(key, attributes[key])
        }

        for (var key in events) {
            element.addEventListener(key, events[key])
        }

        return element
    }

    function _selectDate(e) {
        var date = new Date(e.target.title)

        if ("value" in _target) {
            _target.value = date.toLocaleDateString()
        } else {
            _target.innerHTML = date.toLocaleDateString()
        }

        _removeCalendar()
    }

    function _removeCalendar() {
        if (_calendar) {
            _calendar.parentNode.removeChild(_calendar)
            _calendar = null
        }
    }

    function _changeYear(e) {
        if (e.target.innerHTML == "‹") {
            _date.setFullYear(_date.getFullYear() - 1)
        } else {
            _date.setFullYear(_date.getFullYear() + 1)
        }

        _attachCalendar()
    }

    function _changeMonth(e) {
        if (e.target.innerHTML == "‹") {
            _date.setMonth(_date.getMonth() - 1)
        } else {
            _date.setMonth(_date.getMonth() + 1)
        }

        _attachCalendar()
    }

    function _render(date) {
        var year = date.getFullYear()
        var month = date.getMonth()
        var startDay = new Date(year, month, 1).getDay()
        //var daysInMonth = new Date(year, month + 1, 0).getDate()
        var startDate = new Date(year, month, -startDay + 1)
        var today = new Date()
        today.setHours(0, 0, 0, 0)

        var cal = h("div", { class: "calendar" })
        cal.appendChild(h("div", { class: "btn" }, "‹", { click: _changeYear }))
        cal.appendChild(h("div", { class: "year" }, year))
        cal.appendChild(h("div", { class: "btn" }, "›", { click: _changeYear }))

        cal.appendChild(h("hr"))

        cal.appendChild(h("div", { class: "btn" }, "‹", { click: _changeMonth }))
        cal.appendChild(h("div", { class: "month" }, _months[month]))
        cal.appendChild(h("div", { class: "btn" }, "›", { click: _changeMonth }))

        cal.appendChild(h("hr"))

        _days.forEach(function (x) {
            cal.appendChild(h("div", { class: "day header" }, x))
        })

        cal.appendChild(h("hr"))

        for (var i = 0; i < 6; i++) {
            for (var x = 0; x < 7; x++) {
                var cls = (startDate.getMonth() == month ? "day" : "day other") + (+today == +startDate ? " today" : "") + (+_selected == +startDate ? " selected" : "")
                cal.appendChild(h("div", { title: startDate.toDateString(), class: cls }, startDate.getDate(), { click: _selectDate }))
                startDate.setDate(startDate.getDate() + 1)
            }
            cal.appendChild(h("hr"))
        }

        cal.appendChild(h("div", { class: "today-btn", title: today.toDateString() }, "Today", { click: _selectDate }))

        return cal
    }

    function _show(target) {
        if (typeof target == "string") {
            _target = $(target)
        } else {
            _target = target
        }

        var date = new Date(_target.value || _target.innerHTML)
        if (date instanceof Date && date.valueOf()) {
            _date = date;
            _selected = new Date(date.toDateString())
        }

        _attachCalendar()
    }

    function _attachCalendar() {
        _removeCalendar()
        _calendar = _render(_date)

        _calendar.style.marginLeft = -_target.offsetWidth + "px"
        _calendar.style.marginTop = _target.offsetHeight+4 + "px"

        //insert after the target
        _target.parentNode.insertBefore(_calendar, _target.nextSibling)

        document.addEventListener("click", _removeCalendar, true)
    }

    var cssId = "calendarCss"

    if (!$(cssId)) {
        var css = "" +
            ".calendar{border:solid 1px #fff;box-shadow:0px 0px 3px 1px #666;padding:1em;font-family:arial;background:#fff;border-radius:0.3em;display:inline-block;white-space:nowrap;position:absolute;z-index:1}" +
            ".calendar div{text-align:center;padding:0.2em;display:inline-block;user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none}" +
            ".calendar .day{width:2.5em;cursor:pointer;color:#000;border:solid 1px #fff;border-radius:0.2em;box-sizing:border-box;padding:0.3em}" +
            ".calendar .day:hover{color:#057eff;border-color:#057eff}" +
            ".calendar .other{color:#bbb}" +
            ".calendar .btn{cursor:pointer;font-size:1em;width:25%;box-sizing:border-box;border-radius:0.2em;border:solid 1px #fff}" +
            ".calendar .btn:hover{border-color:#057eff;color:#057eff}" +
            ".calendar .year, .calendar .month{width:50%;box-sizing:border-box}" +
            ".calendar .header{cursor:auto;color:#057eff;margin:0.8em 0;border:#fff}" +
            ".calendar .today-btn{background:#057eff;cursor:pointer;color:#fff;display:block;padding:0.3em;border-radius:0.2em}" +
            ".calendar .today-btn:hover{background:#0069d8}" +
            ".calendar .today{background:#057eff;color:#fff !important}" +
            ".calendar .selected{border-color:#f00;color:#f00}" +
            ".calendar hr{visibility:hidden;margin:0}"

        var s = h("style", { id: cssId, style: "text/css" }, css)
        $("head").appendChild(s)
    }

    return {
        show: _show
    }
}()
