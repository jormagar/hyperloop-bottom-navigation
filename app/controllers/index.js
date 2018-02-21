const Activity = require('android.app.Activity'),
  activity = new Activity(Ti.Android.currentActivity);

const FrameLayout = require('android.widget.FrameLayout');
const frameLayout = FrameLayout.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.frame_layout));
const BottomNavigationView = require('android.support.design.widget.BottomNavigationView');
const BottomNavigationMenuView = require('android.support.design.internal.BottomNavigationMenuView');
const BottomNavigationPresenter = require('android.support.design.internal.BottomNavigationPresenter');
const BottomNavigationItemView = require('android.support.design.internal.BottomNavigationItemView');
const navigation = BottomNavigationView.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.navigation));
const Field = require('java.lang.reflect.Field');
const R = require('android.R');

for (var key in BottomNavigationPresenter){
  Ti.API.info('Key: ' + key);
}
/*const menuView = BottomNavigationMenuView.cast(navigation.getChildAt(0));
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

//let currentMenuItem = navigation.getMenu().getItem(0).setChecked(true);

navigation.getMenu().getItem(2).setChecked(false);
navigation.getMenu().getItem(1).setChecked(false);
navigation.getMenu().getItem(0).setChecked(true);

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

navigation.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener({
  onNavigationItemSelected: function (item) {
    let message = 'Menu item selected: ';
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

    return false;
  }
}));

$.msg = Ti.UI.createLabel({
  color: 'black',
  font: {
    fontSize: 24
  },
  text: 'I am a label'
});

frameLayout.addView($.msg);

$.index.open();
