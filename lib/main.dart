// import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
// import 'package:open_file/open_file.dart';
// import 'package:pdfx/pdfx.dart';
// import 'package:performance/performance.dart';
// import 'package:pdf/widgets.dart' as pw;
import 'package:universal_html/html.dart' as html;

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({
    Key? key,
  }) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    // showCV();
  }

  Future<void> showCV() async {
    var bytes = await rootBundle.load(
        "assets/SaadAlviDetailedResume.pdf"); // location of your asset file

    final blob = html.Blob([bytes], 'application/pdf');
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.window.open(url, "_blank");
    html.Url.revokeObjectUrl(url);
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
        // color: Colors.white,
        // darkTheme: ThemeData.dark(),
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          // backgroundColor: Colors.grey,
          body: Center(
            child: TextButton(
              onPressed: () => showCV(),
              child: const Text(
                'CLIK ME!!!',
              ),
            ),
          ),
        ),
      );
}
