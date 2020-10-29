//
//  Meme+Fetcher.swift
//  MemeGenerator
//
//  Created by Fatah on 29/10/20.
//

import Foundation
import Combine

extension Meme {
    class Fetcher: ObservableObject {
        
        // fetching error class
        enum FetchingError: Error, LocalizedError {
            
            // unknown error occurred
            case unknown
            
            // decoding error occurred for the following reason
            case decodingError(reason: String)
            
            // create the custom description from the error
            var errorDescription: String? {
                switch self {
                case .unknown:
                    return "unknown error"
                case .decodingError(let reason):
                    return reason
                }
            }
        }
        
        // url api, better not hardcoded but construct an object for various
        // on this tutorial, only hitting one specific endpoint
        private let url = URL(string: "https://api.imgflip.com/get_memes")!
        
        // fetch all the popular memes
        // - return AnyPublisher<Meme, ApiError>
        func fetchMemes() -> AnyPublisher<Meme, FetchingError> {
            
            // convert snake case to camel case
            let decoder = JSONDecoder()
            decoder.keyDecodingStrategy = .convertFromSnakeCase
            
            // Combine data task using url session
            return URLSession.shared.dataTaskPublisher(for: url)
                .tryMap { $0.data }
                .decode(type: Meme.self, decoder: decoder)
                .mapError { (error) -> FetchingError in
                    
                    // if there is error while decoding, convert to our fetchingerror
                    if error is DecodingError {
                        return FetchingError.decodingError(reason: error.localizedDescription)
                    }
                    
                    // unknown error occured
                    return FetchingError.unknown
                }
                .eraseToAnyPublisher()
        }
    }
}
