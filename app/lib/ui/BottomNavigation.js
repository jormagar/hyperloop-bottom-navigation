const Activity = require('android.app.Activity'),
  Context = require('android.content.Context'),
  activity = new Activity(Ti.Android.currentActivity),
  LayoutInflater = require('android.view.LayoutInflater'),
  inflater = LayoutInflater.from(activity.getApplicationContext());

exports.createBottomNavigation = function (args) {
  return inflater.inflate(Titanium.App.Android.R.layout[args.layout], null);
}
