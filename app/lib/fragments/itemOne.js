const Fragment = require('android.app.Fragment');

let MyFragment = Fragment.extend({
  /*newInstance: function () {
    return this;
  },
  onCreate: function (savedInstanceState) {
    this.super.onCreate(savedInstanceState);
  },*/
  onCreateView: function (inflater, container, savedInstanceState) {
    Ti.API.info('onCreateView');
    return inflater.inflate(Titanium.App.Android.R.layout.fragment, container, false);
  }
});

module.exports = MyFragment;

/*class ItemOneFragment extends android.app.Fragment {
  public static ItemOneFragment newInstance() {
    ItemOneFragment fragment = new ItemOneFragment();
    return fragment;
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
    Bundle savedInstanceState) {
    return inflater.inflate(R.layout.fragment_item_one, container, false);
  }
}*/
