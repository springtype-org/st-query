import { Selector } from 'testcafe';

// eslint-disable-next-line
fixture`Smoke test`.page`../dist/index.html`;

test('Click button and check contents', async (t) => {

    await t.wait(20);

    await t
        .expect(Selector('#someText').exists).ok()
});
