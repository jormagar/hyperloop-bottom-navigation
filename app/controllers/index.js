const Activity = require('android.app.Activity'),
  activity = new Activity(Ti.Android.currentActivity);

//const FrameLayout = require('android.widget.FrameLayout');
//const frameLayout = FrameLayout.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.frame_layout));
const BottomNavigationView = require('android.support.design.widget.BottomNavigationView');
const TextView = require('android.widget.TextView');

let textView;
let navigation;

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




$.index.activity.onCreate = function () {
  Ti.API.info('onCreate');

  message = TextView.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.message));
  navigation = BottomNavigationView.cast($.bottomNavContainer.findViewById(Titanium.App.Android.R.id.navigation));

  navigation.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener({
    onNavigationItemSelected: function (item) {
      Ti.API.info('on Navigation Item Selected');
      //item.setChecked(true);

      try {
        switch (item.getItemId()) {
          case Titanium.App.Android.R.id.navigation_home:
            message.setText('Home');
            return true;
          case Titanium.App.Android.R.id.navigation_dashboard:
            message.setText('Dashboard');
            return true;
          case Titanium.App.Android.R.id.navigation_notifications:
            message.setText('Notifications');
            return true;
        }
      } catch (e) {
        Ti.API.info(e.message);
      }

      return false;
    }
  }));
};

$.index.open();
