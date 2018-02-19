var Activity = require('android.app.Activity'),
  activity = new Activity(Ti.Android.currentActivity);

const RelativeLayout = require('android.widget.RelativeLayout');
const relativeLayout = RelativeLayout.cast($.bottomNav.findViewById(Titanium.App.Android.R.id.frame_layout));

relativeLayout.addView(Ti.UI.createLabel({
  color: 'white',
  font: {
    fontSize: 24
  },
  text: 'I am a label'
}));

$.index.open();
