function generateStory(e) {
    e.preventDefault()
    let personName = document.getElementById('personName').value;
    let place = document.getElementById('place').value;
    let itemCount = document.getElementById('itemCount').value;;
    let item = document.getElementById('item').value;;
    let friendName = document.getElementById('friendName').value;;
    let givenAway = document.getElementById('givenAway').value;;
    let found = document.getElementById('found').value;;
    // 'One morning, ' + personName + "went..." avoid this by using template literal syntax (${---})
    let story = `On a bright afternoon, ${personName} arrived at ${place} carrying ${itemCount} ${item}. While exploring ${place}, ${personName} bumped into ${friendName}, who was searching for the same ${item}. “Hey ${personName}, those ${item} look amazing!” ${friendName} exclaimed. Wanting to help, ${personName} decided to share and gave ${givenAway} ${item} to ${friendName}. Grateful and excited, ${friendName} smiled brightly. As the adventure continued, ${personName} discovered ${found} more ${item} hidden around ${place}. Before heading home,${personName} counted everything carefully. In total, ${personName} now has${parseFloat(itemCount) - +givenAway + +found} ${item}. It turned into an unforgettable day at ${place}!`;

    document.getElementById('story').innerText = story;
}

let form = document.getElementById('storyForm');
form.addEventListener('submit', generateStory)


