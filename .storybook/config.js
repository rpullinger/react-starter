import { configure } from '@kadira/storybook';

import '../build/base.css';

function loadStories() {
    require('../app/scripts/components/stories/button');
    require('../app/scripts/components/stories/hello');
}

configure(loadStories, module);
