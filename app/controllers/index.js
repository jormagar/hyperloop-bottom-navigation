const Activity = require('android.app.Activity'),
  activity = new Activity(Ti.Android.currentActivity);

const FrameLayout = require('android.widget.FrameLayout');
const frameLayout = FrameLayout.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.frame_layout));
const BottomNavigationView = require('android.support.design.widget.BottomNavigationView');
const navigation = BottomNavigationView.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.navigation));

//Trying to fix first selection updating menu manually with updateMenuView method
/*
const BottomNavigationMenuView = require('android.support.design.internal.BottomNavigationMenuView');
const BottomNavigationPresenter = require('android.support.design.internal.BottomNavigationPresenter');
const BottomNavigationItemView = require('android.support.design.internal.BottomNavigationItemView');
const Field = require('java.lang.reflect.Field');

//Trick to see exported methods inside Presenter
for (var key in BottomNavigationPresenter){
  Ti.API.info('Key: ' + key);
}

const mPresenter = navigation.getClass().getDeclaredField("mPresenter");
for (var i in mPresenter) {
  Ti.API.info(i);
}
mPresenter.setAccessible(true);

const presenter = BottomNavigationPresenter.cast(mPresenter.get(navigation));
for (var i in presenter) {
  Ti.API.info('Presenter: ' + i);
}
Ti.API.info(typeof presenter.updateMenuView);
presenter.updateMenuView(true);
*/

//Trying to disable shiftingMode in BottomNavigationView manually

/*
const menuView = BottomNavigationMenuView.cast(navigation.getChildAt(0));
const shiftingMode = menuView.getClass().getDeclaredField("mShiftingMode");
shiftingMode.setAccessible(true);
shiftingMode.setBoolean(menuView, false);
shiftingMode.setAccessible(false);

for (let i = 0; i < menuView.getChildCount(); i++) {
  let item = BottomNavigationItemView.cast(menuView.getChildAt(i));
  item.setShiftingMode(false);
  // set once again checked value, so view will be updated
  item.setChecked(item.getItemData().isChecked());
}*/

navigation.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener({
  onNavigationItemSelected: function (item) {
    let message = 'Selected: ';
    let selected = item.getItemId();

    item.setChecked(true);

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

    $.msg.setText(message);

    return false;
  }
}));

$.msg = Ti.UI.createLabel({
  left: 16,
  right: 16,
  color: 'black',
  font: {
    fontSize: 24
  },
  text: 'I am a label added to the FrameLayout programmatically'
});

frameLayout.addView($.msg);

$.index.open();
