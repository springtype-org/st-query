import { Selector } from 'testcafe';

// eslint-disable-next-line
fixture`Smoke test`.page`../dist/index.html`;

test('Input field has been rendered', async (t) => {
    await t.wait(20);
    await t.expect(Selector('input[name=firstname]').exists).ok()
});

test('Input field can be set a value', async (t) => {
    await t.wait(20);
    await t.pressKey( "tab" );
    await t.pressKey( "tab" );
    await t.expect(Selector('input[name=firstname]').nth(0).value).eql("2")
});
