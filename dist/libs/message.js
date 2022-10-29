import chalkAnimation from 'chalk-animation';
import sleep from './sleep.js';
export default async function message({ message }) {
    const neonTitle = chalkAnimation.neon(`${message}\n`);
    await sleep({ ms: 1000 });
    neonTitle.stop();
}
//# sourceMappingURL=message.js.map