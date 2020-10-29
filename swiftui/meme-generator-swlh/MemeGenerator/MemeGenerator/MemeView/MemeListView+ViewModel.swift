//
//  MemeListView+ViewModel.swift
//  MemeGenerator
//
//  Created by Fatah on 29/10/20.
//

import Foundation
import Combine

extension MemeListView {
    
    // create a view model that's only for our memelistview
    // inherit from observable object so we can publish chaged to a view and have it update
    class ViewModel: ObservableObject {
        
        // our array of meme info that we will request for
        // default to empty array until we fetch them
        @Published var memes: [Meme.Info] = []
        
        // private variables of our fetcher
        private let memeFetcher = Meme.Fetcher()
        
        // we keep track of our AnyCancellables
        private var disposables = Set<AnyCancellable>()
        
        func fetchMemes() {
            memeFetcher.fetchMemes()
                .receive(on: DispatchQueue.main)
                .sink { (completion) in
                    switch completion {
                    case .finished:
                        break
                    case .failure(let error):
                        print(error)
                    }
                } receiveValue: { (memes) in
                    
                    // update our published memes variable so our list view updates with these changes
                    self.memes = memes.data.memes
                }
                // store the response in disposable so we don't look reference when the function goes out of scope
                .store(in: &disposables)

        }
    }
}
