// Original file: proto/hello.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _helloPackage_HelloReply, HelloReply__Output as _helloPackage_HelloReply__Output } from '../helloPackage/HelloReply';
import type { HelloRequest as _helloPackage_HelloRequest, HelloRequest__Output as _helloPackage_HelloRequest__Output } from '../helloPackage/HelloRequest';

export interface HelloServiceClient extends grpc.Client {
  SayHello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloServiceHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_helloPackage_HelloRequest__Output, _helloPackage_HelloReply>;
  
}

export interface HelloServiceDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_helloPackage_HelloRequest, _helloPackage_HelloReply, _helloPackage_HelloRequest__Output, _helloPackage_HelloReply__Output>
}
