function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function clickAll(buttons) {
    console.log('clicking ' + buttons.length + ' buttons')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].click()
        await sleep(2000)
        buttons[i].closest('[data-testid="cellInnerDiv"]').remove()
    }
}

async function unblock() {

    const unblockButtons = document.querySelectorAll('[aria-label="Blocked"]')
    if(unblockButtons.length > 0) {
        console.log('found ' + unblockButtons.length + ' buttons.')
        await clickAll(unblockButtons)
        unblock().then()
    }
}

function main() {
    unblock().then()
}
