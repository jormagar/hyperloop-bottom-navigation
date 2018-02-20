const Activity = require('android.app.Activity'),
  activity = new Activity(Ti.Android.currentActivity);

const RelativeLayout = require('android.widget.RelativeLayout');
const relativeLayout = RelativeLayout.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.relative_layout));
const BottomNavigationView = require('android.support.design.widget.BottomNavigationView');
const navigation = BottomNavigationView.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.navigation));
//const navigation = BottomNavigationView.cast($.bottomNavContainer.findViewById(resIDFromString('navigation', 'id')));

function resIDFromString(variableName, resourceName) {
  return activity.getResources().getIdentifier(variableName, resourceName, activity.getPackageName());
}

for (var i in BottomNavigationView) {
  Ti.API.info(i);
}

navigation.setOnNavigationItemReselectedListener(new BottomNavigationView.OnNavigationItemReselectedListener({
  onNavigationItemReselected: function (item) {
    var message = 'Menu item selected: <' + item + '>';

    Ti.API.info('On navi item reselected');

    /*switch (item.getItemId()) {
      case Titanium.App.Android.R.id.action_item1:
        alert('Menu action item 1');
        break;
      case Titanium.App.Android.R.id.action_item2:
        alert('Menu action item 2');
        break;
      case Titanium.App.Android.R.id.action_item3:
        alert('Menu action item 3');
        break;
    }*/

    $.msg.setText(message);

    return false;
  }
}));

navigation.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener({
  onNavigationItemSelected: function (item) {
    var message = 'Menu item selected: <' + item.getItemId() + '>';

    Ti.API.info('On navi item selected');

    Ti.API.info(item.getItemId());

    //navigation.getMenu().getItem(item.getItemId())
    /*switch (item.getItemId()) {
      case Titanium.App.Android.R.id.action_item1:
        alert('Menu action item 1');
        break;
      case Titanium.App.Android.R.id.action_item2:
        alert('Menu action item 2');
        break;
      case Titanium.App.Android.R.id.action_item3:
        alert('Menu action item 3');
        break;
    }*/

    $.msg.setText(message);

    return false;
  }
}));

$.msg = Ti.UI.createLabel({
  color: 'white',
  font: {
    fontSize: 24
  },
  text: 'I am a label'
});

relativeLayout.addView($.msg);

$.index.open();
