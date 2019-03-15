import './html-equal.js';
import './job-list-template.test.js';
import './manipulate-hash.test.js';
import './headerTemplate.test.js';
// add this import from our firebase.js module:
import { app } from '../src/firebase.js';
import './html-equal.js';


// add this line that cleans up firebase when test suite is done:
QUnit.done(() => {
    app.delete();
});
