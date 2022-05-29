import { resolve } from "path";
import * as protoloder from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import type { ProtoGrpcType } from "../proto/hello";
import type { HelloServiceHandlers } from "../proto/helloPackage/HelloService";

//设置端口
const PORT = 8080;
// 设置protobuf文件路径
//动态加载protobuf文件
const PROTO_PATH = resolve(__dirname, "../proto/hello.proto");
// options
const options = {
  keepCase: true, //保留字段名称。默认是将它们更改为驼峰式大小写 boolean
  longs: String,// 用于表示long值的类型。默认为Long对象类型。 string | number
  enums: String, //用于表示enum值的类型。默认为数值。
  defaults: true,// 设置输出对象的默认值。默认为false.
  oneofs: true, //将 virtual oneof 属性设置为当前字段的名称。默认为false.
};
// 加载proto文件
const packageDefinition = protoloder.loadSync(PROTO_PATH, options);
// 创建grpc对象并获取包里的函数
const helloPackage = (grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType ).helloPackage;


const sayHello: HelloServiceHandlers["SayHello"] = (
  call,
  callback
) => {
    console.log(call.request.name)
    console.log(call.metadata.getMap()["user-agent"])
  callback(null, { message: "我是node服务端" });
};

//创建服务端
const server = new grpc.Server();
//添加handler
server.addService(helloPackage.HelloService.service, {
  sayHello,
});
// 绑定端口
server.bindAsync(
  `localhost:${PORT}`,
  // 不使用ssl
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.log(err);
    }
    console.log(`server start at ${port}`);
    // 启动服务器
    server.start();
  }
);
