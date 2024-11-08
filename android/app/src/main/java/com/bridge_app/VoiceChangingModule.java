package com.bridge_app;

import static android.content.Context.MODE_PRIVATE;

import android.content.SharedPreferences;
import android.os.Build;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class VoiceChangingModule extends ReactContextBaseJavaModule {
       SharedPreferences sharedPreferences ;
    public VoiceChangingModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
         sharedPreferences = getReactApplicationContext().getSharedPreferences("abcd",MODE_PRIVATE);
    }

    @NonNull
    @Override
    public String getName() {
        return "VoiceChangingModule";
    }


    @ReactMethod
//    @RequiresApi(api = Build.VERSION_CODES.M)
    public void changeVoiceToAlien(String file, Callback successCallBack){

        Log.d("tag","inside changeVoiceToAlien method data is " + file +" ");
       boolean isSuccess = SaveToSharedPreferance(file);
       if(isSuccess){
          String data = sharedPreferences.getString("data","No Data in Shared Pref");
             successCallBack.invoke( data);
       }

    }

    private boolean SaveToSharedPreferance(String file) {
         Log.d("tag","inside Shared Pref "+file);
         SharedPreferences.Editor editor = sharedPreferences.edit();
         editor.putString("data",file);
         return editor.commit();
    }
}
