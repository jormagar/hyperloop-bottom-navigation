const Activity = require('android.app.Activity'),
  activity = new Activity(Ti.Android.currentActivity);

const RelativeLayout = require('android.widget.RelativeLayout');
const relativeLayout = RelativeLayout.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.relative_layout));
const BottomNavigationView = require('android.support.design.widget.BottomNavigationView');
const navigation = BottomNavigationView.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.navigation));
const R = require('android.R');
//const navigation = BottomNavigationView.cast($.bottomNavContainer.findViewById(resIDFromString('navigation', 'id')));

function resIDFromString(variableName, resourceName) {
  return activity.getResources().getIdentifier(variableName, resourceName, activity.getPackageName());
}

for (var i in BottomNavigationView) {
  Ti.API.info(i);
}

navigation.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener({
  onNavigationItemSelected: function (item) {
    let message = 'Menu item selected: ';
    let result = false;
    let selected = item.getItemId();

    switch (selected) {
      case Titanium.App.Android.R.id.action_item1:
        message += 'Item 1';
        break;
      case Titanium.App.Android.R.id.action_item2:
        message += 'Item 2';
        break;
      case Titanium.App.Android.R.id.action_item3:
        message += 'Item 3';
        break;
    }

    /*const menu = navigation.getMenu();
    let size = menu.size();

    for (let i = 0; i < size; i++) {
        let menuItem = menu.getItem(i);
        Ti.API.info('Item ' + menuItem.getItemId() + ' ' + typeof menuItem.getItemId());
        Ti.API.info('Item selected' + selected + ' ' + typeof selected);
        Ti.API.info(menuItem.getItemId() == selected);
        menuItem.setChecked(menuItem.getItemId() == selected);
    }*/

    $.msg.setText(message);

    return result;
  }
}));

$.msg = Ti.UI.createLabel({
  color: 'black',
  font: {
    fontSize: 24
  },
  text: 'I am a label'
});

relativeLayout.addView($.msg);

$.index.open();
