'use strict';
import { getBackground } from './background.js';
import { getTime } from './clock.js';
import { loadName } from './greeting.js';
import { initTodos } from './todo.js';
import { loadCoords } from './weather.js';
getBackground();

// Run getTime function every second to update clocks.
setInterval(getTime, 1000);

loadName();

initTodos();

loadCoords();
