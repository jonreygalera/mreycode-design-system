# MrEYCode utils

## Available utilities:

### Custom hooks

- useEventListener
  > useEventListener(eventType,callback,element = window)

```js
import { useEventListener } from "@mreycode/utils";
```

- useScreenType

```js
Example Usage
import { useScreenType } from "@mreycode/utils";
const screentType = useScreenType();
console.log(screentType);
// type: mobile, tablet, laptop, desktop, largeDesktop
// Output:
// { type: "mobile", width: 552, height: 760 }

```

- useWindowSize

```js
Example Usage
import { useWindowSize } from "@mreycode/utils";
const {width, height} = useWindowSize();
```

- useLocalStorage
  > useLocalStorage(key = null, defaultValue = "")

```js
import { useLocalStorage } from "@mreycode/utils";
const [appTheme, setAppTheme] = useLocalStorage("theme", "dark");
```

### Checker

- isBlank
  > isBlank(value)

```js
// Example Usage
import { isBlank } from "@mreycode/utils";
console.log(isBlank(null)); // true
console.log(isBlank(undefined)); // true
console.log(isBlank("")); // true
console.log(isBlank("   ")); // true
console.log(isBlank("hello")); // false
console.log(isBlank(123)); // false
console.log(isBlank([])); // false
```

### Parser

- stringJSON
  > stringJSON(data, key = null, defaultValue = "")

```js
// Example Usage
import { stringJSON } from "@mreycode/utils";
console.log(stringJSON("[]")); // []
console.log(stringJSON('{name:"MrEYCode"}')); // { name: "MrEYCode" }
console.log(stringJSON('{name:"MrEYCode"}', "name")); // MrEYCode
console.log(stringJSON('{"name": "MrEYCode"}', "country", "Philippines")); // Philippines
```
